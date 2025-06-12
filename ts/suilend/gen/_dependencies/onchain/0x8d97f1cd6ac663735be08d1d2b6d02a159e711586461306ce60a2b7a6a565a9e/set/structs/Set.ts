import * as reified from "../../../../../_framework/reified.js";
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
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { Table } from "../../../0x2/table/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { Unit as Unit1 } from "./Unit.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSet(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::set::Set` + "<");
}

export interface SetFields<T0 extends TypeArgument> {
  keys: ToField<Vector<T0>>;
  elems: ToField<Table<ToPhantom<T0>, ToPhantom<Unit1>>>;
}

export type SetReified<T0 extends TypeArgument> = Reified<Set<T0>, SetFields<T0>>;

/**
 * Move struct: `Set`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::set`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Set<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set::Set`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Set.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set::Set<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Set.$isPhantom;

  readonly keys: ToField<Vector<T0>>;
  readonly elems: ToField<Table<ToPhantom<T0>, ToPhantom<Unit1>>>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: SetFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Set.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set::Set<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.keys = fields.keys;
    this.elems = fields.elems;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(T0: T0): SetReified<ToTypeArgument<T0>> {
    return {
      typeName: Set.$typeName,
      fullTypeName: composeSuiType(
        Set.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::set::Set<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Set.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Set.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Set.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Set.fromBcs(T0, data),
      bcs: Set.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Set.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Set.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Set.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Set.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Set.fetch(client, T0, id),
      new: (fields: SetFields<ToTypeArgument<T0>>) => {
        return new Set([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Set.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Set<ToTypeArgument<T0>>>> {
    return phantom(Set.reified(T0));
  }
  static get p() {
    return Set.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Set<${T0.name}>`, {
        keys: bcs.vector(T0),
        elems: Table.bcs,
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Set<ToTypeArgument<T0>> {
    return Set.reified(typeArg).new({
      keys: decodeFromFields(reified.vector(typeArg), fields.keys),
      elems: decodeFromFields(
        Table.reified(reified.phantom(typeArg), reified.phantom(Unit1.reified())),
        fields.elems,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Set<ToTypeArgument<T0>> {
    if (!isSet(item.type)) {
      throw new Error("not a Set type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Set.reified(typeArg).new({
      keys: decodeFromFieldsWithTypes(reified.vector(typeArg), item.fields.keys),
      elems: decodeFromFieldsWithTypes(
        Table.reified(reified.phantom(typeArg), reified.phantom(Unit1.reified())),
        item.fields.elems,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Set<ToTypeArgument<T0>> {
    return Set.fromFields(typeArg, Set.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      keys: fieldToJSON<Vector<T0>>(`vector<${this.$typeArgs?.[0]}>`, this.keys),
      elems: this.elems.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): Set<ToTypeArgument<T0>> {
    return Set.reified(typeArg).new({
      keys: decodeFromJSONField(reified.vector(typeArg), field.keys),
      elems: decodeFromJSONField(
        Table.reified(reified.phantom(typeArg), reified.phantom(Unit1.reified())),
        field.elems,
      ),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Set<ToTypeArgument<T0>> {
    if (json.$typeName !== Set.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Set.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Set.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Set<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Set object`);
    }
    return Set.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Set<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSet(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Set object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Set.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Set.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Set<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Set object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSet(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Set object`);
    }

    return Set.fromSuiObjectData(typeArg, res.data);
  }
}
