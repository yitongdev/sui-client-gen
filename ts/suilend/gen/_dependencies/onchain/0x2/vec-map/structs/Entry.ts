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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEntry(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::vec_map::Entry` + "<");
}

export interface EntryFields<T0 extends TypeArgument, T1 extends TypeArgument> {
  key: ToField<T0>;
  value: ToField<T1>;
}

export type EntryReified<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
> = Reified<Entry<T0, T1>, EntryFields<T0, T1>>;

/**
 * Move struct: `Entry`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 */
export class Entry<T0 extends TypeArgument, T1 extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::vec_map::Entry`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = Entry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::vec_map::Entry<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
  readonly $typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>];
  readonly $isPhantom = Entry.$isPhantom;

  readonly key: ToField<T0>;
  readonly value: ToField<T1>;

  private constructor(
    typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>],
    fields: EntryFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      Entry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::vec_map::Entry<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.key = fields.key;
    this.value = fields.value;
  }

  static reified<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(T0: T0, T1: T1): EntryReified<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    return {
      typeName: Entry.$typeName,
      fullTypeName: composeSuiType(
        Entry.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V35}::vec_map::Entry<${ToTypeStr<ToTypeArgument<T0>>}, ${ToTypeStr<ToTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        ToTypeStr<ToTypeArgument<T0>>,
        ToTypeStr<ToTypeArgument<T1>>,
      ],
      isPhantom: Entry.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        Entry.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Entry.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => Entry.fromBcs([T0, T1], data),
      bcs: Entry.bcs(toBcs(T0), toBcs(T1)),
      fromJSONField: (field: any) => Entry.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) => Entry.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Entry.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Entry.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        Entry.fetch(client, [T0, T1], id),
      new: (fields: EntryFields<ToTypeArgument<T0>, ToTypeArgument<T1>>) => {
        return new Entry([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Entry.reified;
  }

  static phantom<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<ToTypeStr<Entry<ToTypeArgument<T0>, ToTypeArgument<T1>>>> {
    return phantom(Entry.reified(T0, T1));
  }
  static get p() {
    return Entry.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>, T1 extends BcsType<any>>(T0: T0, T1: T1) =>
      bcs.struct(`Entry<${T0.name}, ${T1.name}>`, {
        key: T0,
        value: T1,
      });
  }

  static fromFields<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.reified(typeArg0, typeArg1).new({
      key: decodeFromFields(typeArg0, fields.key),
      value: decodeFromFields(typeArg1, fields.value),
    });
  }

  static fromFieldsWithTypes<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
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

  static fromBcs<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.fromFields(
      [typeArg0, typeArg1],
      Entry.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      key: fieldToJSON<T0>(typeArg0, this.key),
      value: fieldToJSON<T1>(typeArg1, this.value),
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
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    field: any,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Entry.reified(typeArg0, typeArg1).new({
      key: decodeFromJSONField(typeArg0, field.key),
      value: decodeFromJSONField(typeArg1, field.value),
    });
  }

  static fromJSON<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEntry(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Entry object`,
      );
    }
    return Entry.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): Entry<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) {
        throw new Error(`object at is not a Entry object`);
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

  static async fetch<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<Entry<ToTypeArgument<T0>, ToTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Entry object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEntry(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Entry object`);
    }

    return Entry.fromSuiObjectData(typeArgs, res.data);
  }
}
