import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
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
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEntry(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::vec_map::Entry` + "<");
}

export interface EntryFields<K extends TypeArgument, V extends TypeArgument> {
  key: ToField<K>;
  value: ToField<V>;
}

export type EntryReified<K extends TypeArgument, V extends TypeArgument> = Reified<
  Entry<K, V>,
  EntryFields<K, V>
>;

/**
 * Move struct: `Entry`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 */
export class Entry<K extends TypeArgument, V extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::vec_map::Entry`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = Entry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::vec_map::Entry<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
  readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
  readonly $isPhantom = Entry.$isPhantom;

  readonly key: ToField<K>;
  readonly value: ToField<V>;

  private constructor(typeArgs: [ToTypeStr<K>, ToTypeStr<V>], fields: EntryFields<K, V>) {
    this.$fullTypeName = composeSuiType(
      Entry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::vec_map::Entry<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    this.$typeArgs = typeArgs;

    this.key = fields.key;
    this.value = fields.value;
  }

  static reified<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    K: K,
    V: V,
  ): EntryReified<ToTypeArgument<K>, ToTypeArgument<V>> {
    return {
      typeName: Entry.$typeName,
      fullTypeName: composeSuiType(
        Entry.$typeName,
        ...[extractType(K), extractType(V)],
      ) as `${typeof PKG_V31}::vec_map::Entry<${ToTypeStr<ToTypeArgument<K>>}, ${ToTypeStr<ToTypeArgument<V>>}>`,
      typeArgs: [extractType(K), extractType(V)] as [
        ToTypeStr<ToTypeArgument<K>>,
        ToTypeStr<ToTypeArgument<V>>,
      ],
      isPhantom: Entry.$isPhantom,
      reifiedTypeArgs: [K, V],
      fromFields: (fields: Record<string, any>) => Entry.fromFields([K, V], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Entry.fromFieldsWithTypes([K, V], item),
      fromBcs: (data: Uint8Array) => Entry.fromBcs([K, V], data),
      bcs: Entry.bcs(toBcs(K), toBcs(V)),
      fromJSONField: (field: any) => Entry.fromJSONField([K, V], field),
      fromJSON: (json: Record<string, any>) => Entry.fromJSON([K, V], json),
      fromSuiParsedData: (content: SuiParsedData) => Entry.fromSuiParsedData([K, V], content),
      fromSuiObjectData: (content: SuiObjectData) => Entry.fromSuiObjectData([K, V], content),
      fetch: async (client: SuiClient, id: string) => Entry.fetch(client, [K, V], id),
      new: (fields: EntryFields<ToTypeArgument<K>, ToTypeArgument<V>>) => {
        return new Entry([extractType(K), extractType(V)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Entry.reified;
  }

  static phantom<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    K: K,
    V: V,
  ): PhantomReified<ToTypeStr<Entry<ToTypeArgument<K>, ToTypeArgument<V>>>> {
    return phantom(Entry.reified(K, V));
  }
  static get p() {
    return Entry.phantom;
  }

  static get bcs() {
    return <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) =>
      bcs.struct(`Entry<${K.name}, ${V.name}>`, {
        key: K,
        value: V,
      });
  }

  static fromFields<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    typeArgs: [K, V],
    fields: Record<string, any>,
  ): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.reified(typeArg0, typeArg1).new({
      key: decodeFromFields(typeArg0, fields.key),
      value: decodeFromFields(typeArg1, fields.value),
    });
  }

  static fromFieldsWithTypes<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(typeArgs: [K, V], item: FieldsWithTypes): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (!isEntry(item.type)) {
      throw new Error("not a Entry type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Entry.reified(typeArg0, typeArg1).new({
      key: decodeFromFieldsWithTypes(typeArg0, item.fields.key),
      value: decodeFromFieldsWithTypes(typeArg1, item.fields.value),
    });
  }

  static fromBcs<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    typeArgs: [K, V],
    data: Uint8Array,
  ): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.fromFields(
      [typeArg0, typeArg1],
      Entry.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      key: fieldToJSON<K>(typeArg0, this.key),
      value: fieldToJSON<V>(typeArg1, this.value),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    typeArgs: [K, V],
    field: any,
  ): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.reified(typeArg0, typeArg1).new({
      key: decodeFromJSONField(typeArg0, field.key),
      value: decodeFromJSONField(typeArg1, field.value),
    });
  }

  static fromJSON<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    typeArgs: [K, V],
    json: Record<string, any>,
  ): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (json.$typeName !== Entry.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(Entry.$typeName, ...[typeArg0, typeArg1].map(extractType)),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return Entry.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(typeArgs: [K, V], content: SuiParsedData): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEntry(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Entry object`);
    }
    return Entry.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(typeArgs: [K, V], data: SuiObjectData): Entry<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Entry object`);
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

      return Entry.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Entry.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<K extends Reified<TypeArgument, any>, V extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArgs: [K, V],
    id: string,
  ): Promise<Entry<ToTypeArgument<K>, ToTypeArgument<V>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Entry object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isEntry(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Entry object`);
    }

    return Entry.fromSuiObjectData(typeArgs, res.data);
  }
}
