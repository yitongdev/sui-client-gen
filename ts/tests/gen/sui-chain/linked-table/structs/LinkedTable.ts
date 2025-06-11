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
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
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
  T0 extends TypeArgument,
  T1 extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  size: ToField<"u64">;
  head: ToField<Option<T0>>;
  tail: ToField<Option<T0>>;
}

export type LinkedTableReified<
  T0 extends TypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<LinkedTable<T0, T1>, LinkedTableFields<T0, T1>>;

/**
 * Move struct: `LinkedTable`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1 (phantom)
 */
export class LinkedTable<
  T0 extends TypeArgument,
  T1 extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::linked_table::LinkedTable`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, true] as const;

  readonly $typeName = LinkedTable.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
  readonly $typeArgs: [ToTypeStr<T0>, PhantomToTypeStr<T1>];
  readonly $isPhantom = LinkedTable.$isPhantom;

  readonly id: ToField<UID>;
  readonly size: ToField<"u64">;
  readonly head: ToField<Option<T0>>;
  readonly tail: ToField<Option<T0>>;

  private constructor(
    typeArgs: [ToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: LinkedTableFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      LinkedTable.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.size = fields.size;
    this.head = fields.head;
    this.tail = fields.tail;
  }

  static reified<
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): LinkedTableReified<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return {
      typeName: LinkedTable.$typeName,
      fullTypeName: composeSuiType(
        LinkedTable.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V31}::linked_table::LinkedTable<${ToTypeStr<ToTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        ToTypeStr<ToTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      isPhantom: LinkedTable.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        LinkedTable.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LinkedTable.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => LinkedTable.fromBcs([T0, T1], data),
      bcs: LinkedTable.bcs(toBcs(T0)),
      fromJSONField: (field: any) => LinkedTable.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) =>
        LinkedTable.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LinkedTable.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LinkedTable.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        LinkedTable.fetch(client, [T0, T1], id),
      new: (
        fields: LinkedTableFields<
          ToTypeArgument<T0>,
          ToPhantomTypeArgument<T1>
        >,
      ) => {
        return new LinkedTable([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LinkedTable.reified;
  }

  static phantom<
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>>>
  > {
    return phantom(LinkedTable.reified(T0, T1));
  }
  static get p() {
    return LinkedTable.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`LinkedTable<${T0.name}>`, {
        id: UID.bcs,
        size: bcs.u64(),
        head: Option.bcs(T0),
        tail: Option.bcs(T0),
      });
  }

  static fromFields<
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LinkedTable.reified(typeArg0, typeArg1).new({
      id: decodeFromFields(UID.reified(), fields.id),
      size: decodeFromFields("u64", fields.size),
      head: decodeFromFields(Option.reified(typeArg0), fields.head),
      tail: decodeFromFields(Option.reified(typeArg0), fields.tail),
    });
  }

  static fromFieldsWithTypes<
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
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
      head: fieldToJSON<Option<T0>>(
        `${Option.$typeName}<${typeArg0}>`,
        this.head,
      ),
      tail: fieldToJSON<Option<T0>>(
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    field: any,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return LinkedTable.reified(typeArg0, typeArg1).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      size: decodeFromJSONField("u64", field.size),
      head: decodeFromJSONField(Option.reified(typeArg0), field.head),
      tail: decodeFromJSONField(Option.reified(typeArg0), field.tail),
    });
  }

  static fromJSON<
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<LinkedTable<ToTypeArgument<T0>, ToPhantomTypeArgument<T1>>> {
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
