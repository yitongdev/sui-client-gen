import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLinkedTable(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::linked_table::LinkedTable` + "<");
}

export interface LinkedTableFields<
  K extends TypeArgument,
  V extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  size: ToField<"u64">;
  head: ToField<Option<K>>;
  tail: ToField<Option<K>>;
}

export type LinkedTableReified<
  K extends TypeArgument,
  V extends PhantomTypeArgument,
> = Reified<LinkedTable<K, V>, LinkedTableFields<K, V>>;

/**
 * Move struct: `LinkedTable`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1 (phantom)
 */
export class LinkedTable<K extends TypeArgument, V extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::linked_table::LinkedTable`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, true] as const;

  readonly $typeName = LinkedTable.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
  readonly $typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>];
  readonly $isPhantom = LinkedTable.$isPhantom;

  readonly id: ToField<UID>;
  readonly size: ToField<"u64">;
  readonly head: ToField<Option<K>>;
  readonly tail: ToField<Option<K>>;

  private constructor(
    typeArgs: [ToTypeStr<K>, PhantomToTypeStr<V>],
    fields: LinkedTableFields<K, V>,
  ) {
    this.$fullTypeName = composeSuiType(
      LinkedTable.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<K>}, ${PhantomToTypeStr<V>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.size = fields.size;
    this.head = fields.head;
    this.tail = fields.tail;
  }

  static reified<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    K: K,
    V: V,
  ): LinkedTableReified<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    return {
      typeName: LinkedTable.$typeName,
      fullTypeName: composeSuiType(
        LinkedTable.$typeName,
        ...[extractType(K), extractType(V)],
      ) as `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<ToTypeArgument<K>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<V>>}>`,
      typeArgs: [extractType(K), extractType(V)] as [
        ToTypeStr<ToTypeArgument<K>>,
        PhantomToTypeStr<ToPhantomTypeArgument<V>>,
      ],
      isPhantom: LinkedTable.$isPhantom,
      reifiedTypeArgs: [K, V],
      fromFields: (fields: Record<string, any>) =>
        LinkedTable.fromFields([K, V], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LinkedTable.fromFieldsWithTypes([K, V], item),
      fromBcs: (data: Uint8Array) => LinkedTable.fromBcs([K, V], data),
      bcs: LinkedTable.bcs(toBcs(K)),
      fromJSONField: (field: any) => LinkedTable.fromJSONField([K, V], field),
      fromJSON: (json: Record<string, any>) =>
        LinkedTable.fromJSON([K, V], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LinkedTable.fromSuiParsedData([K, V], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LinkedTable.fromSuiObjectData([K, V], content),
      fetch: async (client: SuiClient, id: string) =>
        LinkedTable.fetch(client, [K, V], id),
      new: (
        fields: LinkedTableFields<ToTypeArgument<K>, ToPhantomTypeArgument<V>>,
      ) => {
        return new LinkedTable([extractType(K), extractType(V)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LinkedTable.reified;
  }

  static phantom<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    K: K,
    V: V,
  ): PhantomReified<
    ToTypeStr<LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>>
  > {
    return phantom(LinkedTable.reified(K, V));
  }
  static get p() {
    return LinkedTable.phantom;
  }

  static get bcs() {
    return <K extends BcsType<any>>(K: K) =>
      bcs.struct(`LinkedTable<${K.name}>`, {
        id: UID.bcs,
        size: bcs.u64(),
        head: Option.bcs(K),
        tail: Option.bcs(K),
      });
  }

  static fromFields<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    fields: Record<string, any>,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LinkedTable.reified(typeArg0, typeArg1).new({
      id: decodeFromFields(UID.reified(), fields.id),
      size: decodeFromFields("u64", fields.size),
      head: decodeFromFields(Option.reified(typeArg0), fields.head),
      tail: decodeFromFields(Option.reified(typeArg0), fields.tail),
    });
  }

  static fromFieldsWithTypes<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    item: FieldsWithTypes,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    if (!isLinkedTable(item.type)) {
      throw new Error("not a LinkedTable type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return LinkedTable.reified(typeArg0, typeArg1).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      size: decodeFromFieldsWithTypes("u64", item.fields.size),
      head: decodeFromFieldsWithTypes(
        Option.reified(typeArg0),
        item.fields.head,
      ),
      tail: decodeFromFieldsWithTypes(
        Option.reified(typeArg0),
        item.fields.tail,
      ),
    });
  }

  static fromBcs<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    data: Uint8Array,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LinkedTable.fromFields(
      [typeArg0, typeArg1],
      LinkedTable.bcs(toBcs(typeArg0)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      id: this.id,
      size: this.size.toString(),
      head: fieldToJSON<Option<K>>(
        `${Option.$typeName}<${typeArg0}>`,
        this.head,
      ),
      tail: fieldToJSON<Option<K>>(
        `${Option.$typeName}<${typeArg0}>`,
        this.tail,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    field: any,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LinkedTable.reified(typeArg0, typeArg1).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      size: decodeFromJSONField("u64", field.size),
      head: decodeFromJSONField(Option.reified(typeArg0), field.head),
      tail: decodeFromJSONField(Option.reified(typeArg0), field.tail),
    });
  }

  static fromJSON<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    json: Record<string, any>,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    if (json.$typeName !== LinkedTable.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        LinkedTable.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return LinkedTable.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    content: SuiParsedData,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLinkedTable(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LinkedTable object`,
      );
    }
    return LinkedTable.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [K, V],
    data: SuiObjectData,
  ): LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLinkedTable(data.bcs.type)) {
        throw new Error(`object at is not a LinkedTable object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return LinkedTable.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LinkedTable.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    K extends Reified<TypeArgument, any>,
    V extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [K, V],
    id: string,
  ): Promise<LinkedTable<ToTypeArgument<K>, ToPhantomTypeArgument<V>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LinkedTable object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLinkedTable(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LinkedTable object`);
    }

    return LinkedTable.fromSuiObjectData(typeArgs, res.data);
  }
}
